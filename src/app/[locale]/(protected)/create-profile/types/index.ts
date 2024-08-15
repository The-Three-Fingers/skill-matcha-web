export type RoleKey =
  | 'developer'
  | 'designer'
  | 'product_manager'
  | 'founder'
  | 'marketing_specialist'
  | 'cto'
  | 'other';

export type SearchRoleKey =
  | 'developer'
  | 'designer'
  | 'product_manager'
  | 'founder'
  | 'marketing_specialist'
  | 'cto'
  | 'other';

export type CreateProfileFormSettings = {
  name: string;
  lastName: string;
  roles: string[];
  searchRoles: string[];
};
