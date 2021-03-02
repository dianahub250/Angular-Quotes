export class Quote {
    showDescription: boolean;
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public publisher: string,
        public completeDate: Date,
        public upvote:number,
        public downvote:number
        )
        {
         this.showDescription=false;
    }
}