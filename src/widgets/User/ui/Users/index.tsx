import { FC, useState } from 'react';
import classNames from 'classnames';
import { UserCard, useUsersPages } from '@/features/User';
import { useUsers } from '@/entities/User';
import { 
  Row, 
  Col, 
  Pagination, 
  Switch,
  Input,
  Spin,
} from '@/shared/ui';
import { useDebounce } from '@/shared/hooks';
import { isValidString } from '@/shared/libs';
import styles from './styles.module.css';

interface Props {
  className?: string,
}

export const UsersWidget: FC<Props> = function UsersWidget({
  className,
}) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const { page, perPage, setPage, setPerPage } = useUsersPages();

  const { data, isLoading, isError, error, fetchStatus } = useUsers({
    q: debouncedQuery.trim(),
    order,
    page,
    per_page: perPage,
    sort: 'repositories',
    enabled: isValidString(debouncedQuery),
  })

  const hasUsers = data && data.items.length > 0;
  const isLoadingData = isLoading && fetchStatus !== 'idle';
  const showData = !isLoadingData && hasUsers;

  const handlePaginationChange = (newPage: number, newPerPage: number) => {
    setPage(newPage);
    setPerPage(newPerPage);
  }

  const handleOrderChange = () => {
    setOrder((prev) => prev === 'asc' ? 'desc' : 'asc')
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <Input 
        className={styles.search}
        placeholder="Введите имя пользователя"
        allowClear
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        size="large"
      />
      <Switch
        unCheckedChildren="По возрастания"
        checkedChildren="По убыванию"
        checked={order === 'desc'}
        onChange={handleOrderChange}
      />
      {isLoadingData && <Spin />}
      {!isLoadingData 
      && !isError 
      && !hasUsers 
      && isValidString(debouncedQuery)
      && <span>Пользователей не найдены</span>}
      {isError && <span>Ошибка: {String(error)}</span>}
      {showData && (
        <Row wrap style={{ width: "100%" }} gutter={[16, 16]}>
          {data.items.map((item) => (
            <Col key={item.id} span={8}>
              <UserCard
                avatar={item.avatar_url}
                name={item.login}
                id={item.id}
              />
            </Col>
          ))}
        </Row>
      )}
      {showData && <Pagination
        current={page} 
        onChange={handlePaginationChange} 
        total={data.total_count}
        pageSize={perPage}
        showSizeChanger
      />}
    </div>
  )
};
