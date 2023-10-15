import { Layout } from "../../../shared/components/layout/index";
import { Document } from "../../../widgets/document";
import { LectureOneContent } from "../module/index";

export const LectureOne = () => {
  return (
<Layout>
  <Document content={<LectureOneContent/>}/>
</Layout>
  )
};
