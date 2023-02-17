import { EStudyTabs } from "./enum";
interface StudyTabsItem {
  id: string;
  title: EStudyTabs;
}
export const studyTabs: Array<StudyTabsItem> = [
  { id: '0', title: EStudyTabs.HTML },
  { id: '1', title: EStudyTabs.CSS },
  { id: '2', title: EStudyTabs.JavaScript },
  { id: '3', title: EStudyTabs.VUE },
  { id: '4', title: EStudyTabs.ElementUI },
  { id: '5', title: EStudyTabs.Ubuntu },
  { id: '6', title: EStudyTabs.Windows },
];
