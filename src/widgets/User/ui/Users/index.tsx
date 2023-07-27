import { FC, useState } from 'react';
import classNames from 'classnames';
import { UserCard, useUsersPages } from '@/features/User';
import { useUsers } from '@/entities/User';
import { 
  Row, 
  Col, 
  Pagination, 
  SearchInput,
} from '@/shared/ui';
import styles from './styles.module.css';

interface Props {
  className?: string,
}

export const UsersWidget: FC<Props> = function UsersWidget({
  className,
}) {
  const [query, setQuery] = useState('');
  const { page, perPage, setPage, setPerPage } = useUsersPages();

  const { data, isLoading, isError, error, fetchStatus } = useUsers({
    q: query,
    order: 'desc',
    page: page,
    per_page: perPage,
    sort: 'repositories',
    enabled: query.length > 0,
  })

  const hasUsers = data && data.items.length > 0;
  const isLoadingData = isLoading && fetchStatus !== 'idle';
  const showData = !isLoadingData && hasUsers;

  const handlePaginationChange = (newPage: number, newPerPage: number) => {
    setPage(newPage);
    setPerPage(newPerPage);
  }

  return (
    <div className={classNames(styles.wrapper, className)}>
      <SearchInput 
        className={styles.search}
        placeholder="Введите имя пользователя"
        allowClear
        enterButton="Найти"
        size="large"
        onSearch={setQuery}
        loading={isLoadingData}
      />
      {!isLoadingData 
      && !isError 
      && !hasUsers 
      && query.length > 0
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
