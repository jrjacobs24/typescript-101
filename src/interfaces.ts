export interface Person {
  name: string,
  age?: number // Optional param
};

// Numeric Enum
export enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz // 2
}


// String Enum
export enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ'
};

// Enum
enum Job { WebDev, WebDesigner, PM }
export default Job;


// Classes
export class Team {
  teamName: string;

  // Same as above
  // public teamName: string;

  // "private" prevents outside usage
  // private teamName: string; 

  // Can only be set initially or in constructor
  // readonly teamName: string;

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'goal!';
  }
}