/**
 * @description 工作经历Form
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
function WorkExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const workExperience: TSResume.WorkExperience[] = useSelector(
    (state: any) => state.resumeModel.workExperience
  );
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('workExperience', newDataList);
  };

  return (
    <TaskModal.Dialog
      title="工作经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </TaskModal.Dialog>
  );
}

export default WorkExperience;
