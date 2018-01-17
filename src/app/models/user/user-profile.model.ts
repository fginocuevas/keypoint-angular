import { RoleModel } from "./role.model";
import { BusinessGroupModel } from "./business-group.model";

export class UserProfileModel {
    name: string;
    nickName: string;
    role: RoleModel;
    businessGroupObject: BusinessGroupModel
}

