export function returnSize(file: File) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(file.size) / Math.log(1000));
  return {
    file,
    name: file.name,
    src: URL.createObjectURL(file),
    formattedSize:
      parseFloat((file.size / Math.pow(1024, i)).toFixed(0)) + " " + sizes[i],
  };
}

/**
 * Calculates file Size
 * @params Takes a single file or an array of files
 * @return Return the file or an array of files with a "stringed" size
 */
export function getFileDetails(files: File | File[]) {
  let filesArray: ReturnType<typeof returnSize>[] = [];
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (Array.isArray(files)) {
    files.forEach((file) => {
      const i = Math.floor(Math.log(file.size) / Math.log(1000));
      filesArray.push(returnSize(file));
    });
    return filesArray;
  } else {
    const i = Math.floor(Math.log(files.size) / Math.log(1000));
    return [returnSize(files)]
  }
}
