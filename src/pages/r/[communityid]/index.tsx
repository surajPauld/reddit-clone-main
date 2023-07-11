import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import { Community, communityState } from "@component/atoms/communitiesAtom";
import { firestore } from "@component/firebase/clientApp";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "@component/components/Community/NotFound";
import Header from "@component/components/Community/Header";
import PageContent from "@component/components/Layout/PageContent";
import CreatePostLink from "@component/components/Community/CreatePostLink";
import Posts from "@component/components/Posts/Posts";
import { useSetRecoilState } from "recoil";
import About from "@component/components/Community/About";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  console.log("Here is the CommunityData", communityData);
  const setCommunityStateValue = useSetRecoilState(communityState);
  if (!communityData) {
    return <NotFound />;
  }

  useEffect(() => {
    setCommunityStateValue((prev) => ({
      ...prev,
      currentCommunity: communityData,
    }));
  }, []);

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatePostLink />
          <Posts communityData={communityData} />
        </>
        <>
          <About communityData={communityData} />
        </>
      </PageContent>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("olo");
  // get community data and pass it to the client
  try {
    console.log("in", context.query);

    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );

    console.log("in2", communityDocRef);
    // const communityDoc = await getDoc(communityDocRef);

    const communityDoc = await getDoc(communityDocRef).catch((error) => {
      throw error; // Rethrow the error to be caught by the outer catch block
    });

    console.log("in3", communityDoc);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    // Could add error page here
    console.log("getServerSideProps error", error);
    return { props: {} };
  }
}

export default CommunityPage;
