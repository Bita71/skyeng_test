import { FC } from 'react';
import classNames from 'classnames';
import { UserCard } from '@/features/User';
import { useUsers } from '@/entities/User';
import { Spin, Row, Col } from '@/shared/ui';
import styles from './styles.module.css';

interface Props {
  className?: string,
}

export const UsersWidget: FC<Props> = function UsersWidget({
  className,
}) {
  const { data, isLoading } = useUsers({
    q: 'Bita',
    order: 'desc',
    page: 1,
    per_page: 5,
    sort: 'repositories'
  })

  const hasUsers = data && data.items.length > 0

  return (
    <div className={classNames(styles.wrapper, className)}>
      {isLoading && <Spin />}
      {!isLoading && !hasUsers && <span>Пользователей не найдены</span>}
      {!isLoading && hasUsers && (
        <Row wrap style={{ flexGrow: 1 }} gutter={[16, 16]}>
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
    </div>
  )
};
