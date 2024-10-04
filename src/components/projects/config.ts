/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSkill, Skill } from "../skills/config";
import Evrmore from "./../../images/evrmore.webp";
import LatamNodes from "./../../images/latamnodes.webp";
import MLM from "./../../images/mlm.webp";
import MEM from "./../../images/mem.webp";
import Akash from "./../../images/akash.webp";
import Osmosis from "./../../images/osmosis.webp";
import Portfolio from "./../../images/portfolio.png";



export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projectsEn: Project[] = [
  {
    name: "Frontend",
    description: "Evrmore Chain's website",
    image: Evrmore,
    url: "https://evrmore.com/",
    github: "https://github.com/forbesus/evrmore_website",
    technologies: getSkill(["Vue", "typescript", "css", "git"])
  },
  {
    name: "Fullstack",
    description: "LatamNodes's Lottery site",
    image: LatamNodes,
    url: "https://app.latamnodes.org/home",
    github: "",
    technologies: getSkill(["Django", "Python", "react", "typescript", "css"])
  },
  {
    name: "Blockchain",
    description: "SVN Metaverse NFT staking",
    image: MLM,
    url: "https://drv-owner.com",
    github: "",
    technologies: getSkill(["nodejs", "solidity","web3js", "EthersJS"])
  },
  {
    name: "Open-source",
    description: "osmosis app",
    image: Osmosis,
    url: "https://osmosis.zone/",
    github: "https://github.com/forbesus/osmosis-frontend",
    technologies: getSkill(["Open-Source Contribution", "Next.js", "typescript"])
  },
  {
    name: "Open-source",
    description: "Akash stats and console",
    image: Akash,
    url: "https://stats.akash.network/",
    github: "https://github.com/forbesus/console",
    technologies: getSkill(["Open-Source Contribution", "react", "typescript", "css"])
  },
  {
    name: "Blockchain",
    description: "mem bridge",
    image: MEM,
    url: "https://www.mem.tech/",
    github: "",
    technologies: getSkill(["Arweave", "Web3", "NEXT.js", "Hardhat"])
  },
  {
    name: "Frontend",
    description: "Portfolio",
    image: Portfolio,
    url: "https://tomoyuki-dev.com",
    github: "https://github.com/forbesus/portfolio.git",
    technologies: getSkill(["react", "typescript", "html"])
  }
];