import { EventArguments } from '../types';

export async function generateFiles(args: EventArguments) {
    const { project } = args;

    await project.save();
}
