import { FC } from 'react';
import { 
  Card, 
  CardMeta, 
  Button, 
  Avatar,
} from '@/shared/ui';

interface Props {
  avatar?: string,
  name?: string,
  url?: string,
  className?: string
  repoCount?: number,
  loading: boolean,
  createdAt?: string,
}

export const UserCardBig: FC<Props> = function UserCardBig({
  className,
  avatar,
  name,
  url,
  repoCount,
  loading,
  createdAt
}) {
  return (
    <Card
      loading={loading}
      className={className}
      actions={[
        <Button 
          size="large" 
          type="link" 
          href={url}
          target='__blank'
        >
          На GitHub
        </Button>
      ]}
    >
      <CardMeta 
        title={name}
        avatar={<Avatar size="large" src={avatar} />}
        description={`Создан ${createdAt}. Количество репозиториев: ${repoCount}`}
      />
    </Card>
  )
};
