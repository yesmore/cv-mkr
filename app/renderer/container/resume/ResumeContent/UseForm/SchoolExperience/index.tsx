/**
 * @description 在校经历Form
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
function SchoolExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const schoolExperience: TSResume.SchoolExperience[] = useSelector(
    (state: any) => state.resumeModel.schoolExperience
  );

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('schoolExperience', newDataList);
  };

  return (
    <TaskModal.Dialog
      title="在校经历"
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
        dataList={AdapterExperience.school(schoolExperience)}
        updateDataList={updateDataList}
      >
        <Form />
      </Wrapper>
    </TaskModal.Dialog>
  );
}

export default SchoolExperience;
