import { FindManyPaginatedParams, RepositoryPort } from '../../../libs/ports/repository-port'

import { QiskitUser } from '../domain/qiskit-user'
import { QiskitUserQueryParams } from '../domain/qiskit-user-query-params'

export interface QiskitUserRepositoryPort extends RepositoryPort<QiskitUserQueryParams, QiskitUser> {
    findOneByUser (search: FindManyPaginatedParams<QiskitUserQueryParams>): Promise<QiskitUser | null>
    updateOrCreateQiskitUserFilteredByUser (user: string, data: Partial<QiskitUser>): Promise<QiskitUser>
}
