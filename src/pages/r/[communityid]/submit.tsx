import { Box, Text } from "@chakra-ui/react";
import { communityState } from "@component/atoms/communitiesAtom";
import About from "@component/components/Community/About";
import PageContent from "@component/components/Layout/PageContent";
import NewPostsForm from "@component/components/Posts/NewPostsForm";
import { auth } from "@component/firebase/clientApp";
import useCommunityData from "@component/hooks/useCommunityData";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState);
  const { communityStateValue } = useCommunityData();
  console.log("Communtiy:", communityStateValue);
  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text>Create a Post</Text>
        </Box>
        {user && <NewPostsForm user={user} />}
      </>
      <>
        {communityStateValue.currentCommunity && (
          <About communityData={communityStateValue.currentCommunity} />
        )}
      </>
    </PageContent>
  );
};
export default SubmitPostPage;
