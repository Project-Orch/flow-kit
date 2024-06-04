import { Button, Node } from "@/components";
import { Browsers } from "@/icons/Browsers";
import { FolderOpen } from "@/icons/FolderOpen";
import { Folders } from "@/icons/Folders";
import { useMemo } from "react";
import { NodeProps } from "reactflow";

interface IGoToFolderProps {
  path?: string;
}

export const GoToFolder = ({ data: { path } }: NodeProps<IGoToFolderProps>) => {
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

  const getMainFolder = (path: string) => {
    const mainfolder = path.split("/").pop();

    return mainfolder;
  };

  return (
    <Node.Root>
      <Node.Title scheme="blue">
        <Browsers size={20} weight="regular" /> go to folder
        {path && <b>: {getMainFolder(path)}</b>}
      </Node.Title>
      <Node.Content>
        <Button variant={path ? "link" : "ghost"}>{folderContent}</Button>
      </Node.Content>
    </Node.Root>
  );
};
