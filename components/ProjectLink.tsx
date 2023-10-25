type ProjectLinkProps = {
    href: string;
    title: string;
};

export default function ProjectLink({ href, title }: ProjectLinkProps) {
    return (
        <a href={href} target="_blank" className="group">
            <article className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
                <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
                    <h1 className="text-base font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white duration-300">
                        {title}
                    </h1>
                </div>
                <div className="w-full mr-2 border-y border-gray-700 rounded-2 transition opacity-80 group-hover:border-white duration-300"></div>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    className="text-gray-400 transition-all group-hover:text-white duration-300"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                </svg>
            </article>
        </a>
    );
}
