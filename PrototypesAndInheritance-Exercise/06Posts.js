function solution(){

    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`.trim();
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = []
        }

        addComment(param){
            this.comments.push(param)
        }

        toString(){
            let baseStr = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                const commentStr = this.comments.map(cmnt => ` * ${cmnt}`).join('\n')
                return `${baseStr}\nComments:\n${commentStr}`.trim()
            }
            return baseStr.trim()
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content)
            this.views = views;
        }

        view(){
            this.views++
            return this
        }

        toString(){
            return `${super.toString()}\nViews: ${this.views}`.trim();
        }
    }

    return { Post, SocialMediaPost, BlogPost }
}