"use client";

import { useState } from "react";
import { Content } from "../Content";
import { Title } from "../Title";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FrontendContent } from "./FrontendContent";
import { BackendContent } from "./BackendContent";

import { ToolsContent } from "./ToolsContent";
import { DatabaseContent } from "./DatabaseContent";

export type SkillCategory = "frontend" | "backend" | "database" | "tools";

export const SkillsAndCompetencies = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const renderContent = () => {
    switch (selectedCategory) {
      case "frontend":
        return <FrontendContent />;
      case "backend":
        return <BackendContent />;
      case "db":
        return <DatabaseContent />;
      case "ferramentas":
        return <ToolsContent />;
      default:
        return <div className="text-gray-500">Selecione uma categoria</div>;
    }
  };

  return (
    <main className="pt-16">
      <Content>
        <div className="min-h-screen px-[4%]">
          <Title titleText="Habilidades & Tecnologias">
            Tecnologias e ferramentas que uso para dar vida às ideias
          </Title>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Habilidades Técnicas */}
            <div className="flex-1 p-8">
              <div className="flex items-center justify-center">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Nicho" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">FrontEnd</SelectItem>
                    <SelectItem value="backend">BackEnd</SelectItem>
                    <SelectItem value="db">DB</SelectItem>
                    <SelectItem value="ferramentas">Ferramentas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>{renderContent()}</div>
            </div>

            {/* Habilidades pessoais */}
            <div className="flex-1">
              <FrontendContent />
            </div>
          </div>
        </div>
      </Content>
    </main>
  );
};
