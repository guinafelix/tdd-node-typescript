import { AccountModel } from '@/domain/models/account'

export interface AddAccountParams extends Omit<AccountModel, 'id'> {}

export interface AddAccount {
  add: (account: AddAccountParams) => Promise<AccountModel>
}
