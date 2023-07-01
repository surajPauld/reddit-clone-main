import { Box, Text } from "@chakra-ui/react";
import PageContent from "@component/components/Layout/PageContent";
import NewPostsForm from "@component/components/Posts/NewPostsForm";
import { auth } from "@component/firebase/clientApp";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        {user && <NewPostsForm user={user} />}
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default SubmitPostPage;
