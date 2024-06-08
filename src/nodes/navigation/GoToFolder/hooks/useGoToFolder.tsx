import { FolderOpen } from "@/icons/FolderOpen";
import { Folders } from "@/icons/Folders";
import { useMemo } from "react";

interface IUseGoToFolder {
  path?: string;
}

export const useGoToFolder = ({ path }: IUseGoToFolder) => {
  const folderContent = useMemo(
    () =>
      path ? (
        <>
          <FolderOpen size={20} />
          <p>
            path: <b>{path}</b>
          </p>
        </>
      ) : (
        <>
          <Folders size={22} /> <p>search folder</p>
        </>
      ),
    [path]
  );

  return {
    folderContent,
  };
};
