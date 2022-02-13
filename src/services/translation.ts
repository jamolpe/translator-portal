import { handleRequest } from './utils';

export const loadProjectTranslation = async (projectId: string) => {
  const response = await fetch(`/translation/project/${projectId}`, {
    method: 'GET'
  });
  return handleRequest(response);
};
