/**
 * @description 项目经验Form
 */
import React from 'react';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import TaskModal from '@src/components/TaskModal';
import Form from './Form';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  onClose: () => void;
}

function ProjectExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeModel.projectExperience
  );

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('projectExperience', newDataList);
  };

  return (
    <TaskModal.Dialog
      title="项目经验"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper
        dataList={AdapterExperience.project(projectExperience)}
        updateDataList={updateDataList}
      >
        <Form />
      </Wrapper>
    </TaskModal.Dialog>
  );
}

export default ProjectExperience;
