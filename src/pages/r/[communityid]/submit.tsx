import { Box, Text } from "@chakra-ui/react";
import PageContent from "@component/components/Layout/PageContent";
import NewPostsForm from "@component/components/Posts/NewPostsForm";
import React from "react";

const SubmitPostPage: React.FC = () => {
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        <NewPostsForm />
      </>
      <>{/* About */}</>
    </PageContent>
  );
};
export default SubmitPostPage;
