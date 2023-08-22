import fs from 'fs';
import path from 'path';
import { gql } from '@apollo/client';

export default function loadQuery(queryPath: string) {
  const fullPath = path.join(process.cwd(), queryPath);
  const queryContent = fs.readFileSync(fullPath, 'utf8');
  return gql(queryContent);
}
