// author: William C. Canin
import { deleteAsync } from "del";
import kleur from 'kleur';

const pathsToDelete = [
  "node_modules",
  ".bundle-cache",
  ".jekyll-cache",
  "package-lock.json",
  "Gemfile.lock",
  "_site",
];

async function cleanProject() {
  console.log(kleur.yellow('Cleaning up project directories and files...'));
  try {
    const deletedPaths = await deleteAsync(pathsToDelete);
    if (deletedPaths.length > 0) {
      console.log(kleur.green('Items successfully removed:'));
      deletedPaths.forEach(path => console.log(kleur.gray(`  - ${path}`)));
    } else {
      console.log(kleur.gray('No items to clean.'));
    }
  } catch (error) {
    console.error(kleur.red('Error trying to clean project:'), error);
    process.exit(1);
  }
}

cleanProject();
