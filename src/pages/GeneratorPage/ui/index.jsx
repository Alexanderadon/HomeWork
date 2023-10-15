import React from "react";
import { Layout } from "../../../shared/components/layout";
import { Document } from "../../../widgets/document/index";
import { GeneratorSection } from '../module/index'

export const GeneratorPage = () => {
  return (
    <Layout>
      <Document content={<GeneratorSection/>} />
    </Layout>
  );
};
