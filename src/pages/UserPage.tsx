import { Link, useParams } from "react-router-dom";
import { UserCardBig } from "@/features/User";
import { useUserById } from "@/entities/User";
import { Button, Container } from "@/shared/ui";
import { formatDateTime } from "@/shared/libs";

export const UserPage = function UserPage() {
  const { id = 0 } = useParams();

  const { data, isLoading } = useUserById({ 
    id: Number(id || 0),
    enabled: Boolean(id),
  });
  return (
    <Container>
      <Link to="/">
        <Button
          type="link" 
          style={{ paddingLeft: 0 }}
        >
          Назад
        </Button>
      </Link>
      <UserCardBig
        url={data?.html_url}
        avatar={data?.avatar_url} 
        name={data?.login}
        repoCount={data?.public_repos}
        loading={isLoading}
        createdAt={formatDateTime(data?.created_at || '')}
      />
    </Container>
  )
};
