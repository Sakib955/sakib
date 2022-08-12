function ProjectDetails({ icon, text, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 cursor-pointer"
        >
            <span className="text-[#42e2ff] ">{icon}</span>
            <span
                className={`text-white underline-offset-4 ${link && 'underline decoration-[#42e2ff]'}`}
            >
                {text}
            </span>
        </a>
    );
}

export default ProjectDetails;