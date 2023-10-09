import React from "react";
import { Layout } from "../../../shared/components/layout/index";
import { Document } from "../../../widgets/document";
import { LectureTwoContent } from "../module";

export const LectureTwo = () => {
  return (
    <Layout>
      <Document content={<LectureTwoContent />}></Document>
    </Layout>
  );
};
