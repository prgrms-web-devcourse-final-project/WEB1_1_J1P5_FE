import {
  type IPermission,
  PermissionList,
} from "components/organisms/PermissionList";
import { PermissionRequestTemplateWrapper } from "./styled";

interface IPermissionRequestTemplateProps {
  /** 권한 목록 */
  permissions: IPermission[];
  /** 확인 버튼 클릭 시 실행될 함수 */
  onClick: () => void;
}

export const PermissionRequestTemplate = ({
  permissions,
  onClick,
}: IPermissionRequestTemplateProps) => {
  return (
    <PermissionRequestTemplateWrapper>
      <PermissionList permissions={permissions} onClick={onClick} />
    </PermissionRequestTemplateWrapper>
  );
};
