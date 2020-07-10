export default interface IStorageProvider {
  saveFiles(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
