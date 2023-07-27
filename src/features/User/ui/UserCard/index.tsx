import { FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardMeta, 
  Button, 
  Avatar,
} from '@/shared/ui';

interface Props {
  id?: number,
  avatar?: string,
  name?: string,
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
        <Link to={`/user/${id}`}>
          <Button 
            size="small" 
            type="link" 
            href={`/user/${id}`}
          >
            Перейти
          </Button>
        </Link>
      ]}
    >
      <CardMeta 
        title={name}
        avatar={<Avatar src={avatar} />}
      />
    </Card>
  )
};
