import { Link, useParams } from "react-router-dom";
import { Button, Container } from "@/shared/ui";

export const UserPage = function UserPage() {
  const { id = '' } = useParams();
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
      <div>
        user id - {id}
      </div>
    </Container>
  )
};
