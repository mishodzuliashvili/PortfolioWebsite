import ProjectLink from "./ProjectLink";

type ProjectListProps = {};

export default function ProjectList({}: ProjectListProps) {
    return (
        <div>
            <h1 className="text-xl font-semibold">Projects</h1>
            <div>
                <ProjectLink
                    href="https://fake-user-data-generation.vercel.app/"
                    title="User Data Generator"
                />
                <ProjectLink
                    href="https://reviews-website.vercel.app/"
                    title="Reviews Website"
                />
                <ProjectLink
                    href="https://nextjs-chat-real.vercel.app/"
                    title="Chat"
                />
                <ProjectLink
                    href="https://remote-games-gamma.vercel.app/"
                    title="Remote Games"
                />
                <ProjectLink
                    href="https://vercel.com/mishodzuliashvili/next-auth-website"
                    title="Next Auth"
                />
                <ProjectLink
                    href="https://hrmm.vercel.app/"
                    title="University App For Exams"
                />
                <ProjectLink
                    href="https://meals-app-pearl.vercel.app/search"
                    title="Meals App"
                />
                <ProjectLink
                    href="https://nextjs-blog-deploy-bice.vercel.app/"
                    title="NextJS Blog"
                />
                <ProjectLink
                    href="https://team-apollo.web.app/"
                    title="Team Apollo"
                />
                <ProjectLink
                    href="https://mishodzuliashvili.github.io/supreme-barnacle-build-unity-1/"
                    title="Ball Game in Unity"
                />
                <ProjectLink
                    href="https://animated-crumble-161074.netlify.app/"
                    title="Fox Game in JS"
                />
            </div>
        </div>
    );
}
