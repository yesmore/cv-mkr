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

  // 调用写好修改 redux 的 hooks 操作修改项目经验
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    // 该数据为操作之后的最新数据源，将该数据进行操作并存入 Redux
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
        // 数据经过适配器进行组件数据的适配
        dataList={AdapterExperience.project(projectExperience)}
        updateDataList={updateDataList}
      >
        <Form />
      </Wrapper>
    </TaskModal.Dialog>
  );
}

export default ProjectExperience;
