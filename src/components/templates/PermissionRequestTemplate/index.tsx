import {
  type IPermission,
  PermissionList,
} from "components/organisms/PermissionList";
import { PermissionRequestTemplateWrapper } from "./styled";

interface IPermissionRequestTemplateProps {
  permissions: IPermission[];
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
