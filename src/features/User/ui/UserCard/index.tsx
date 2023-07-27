import { FC } from 'react';
import { 
  Card, 
  CardMeta, 
  Button, 
  Avatar,
} from '@/shared/ui';

interface Props {
  id: string,
  avatar: string,
  name: string,
  className?: string
}

export const UserCard: FC<Props> = function UserCard({
  id,
  className,
  avatar,
  name,
}) {
  return (
    <Card
      className={className}
      actions={[
        <Button size="small" type="link" href={`/user/${id}`}>Перейти</Button>
      ]}
    >
      <CardMeta 
        title={name}
        avatar={<Avatar src={avatar} />}
      />
    </Card>
  )
};
