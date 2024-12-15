import './project.css';

const Project = ({ title, description, link, githubLink, badges = [], techStack = [], image }) => {
  if (!image) {
    image = 'https://picsum.photos/300/300';
  }

  return (
    <div className="project-card flex flex-col justify-between border rounded-md shadow-md p-4 bg-white">
      <div>
        {/* Placeholder Image */}
        <img
          src={image}
          alt={title}
          className="w-full aspect-[1/1] object-cover object-top mb-4 rounded"
        />

        {/* Badges */}

        {badges.length > 0 && (
          <div className="flex flex-wrap mb-2 gap-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="badge text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="mb-4">
            <ul className="flex gap-2 list-none text-sm p-0 text-gray-600">
              {techStack.map((tech, idx) => (
                <li className='py-1 px-2 m-0 rounded-full bg-slate-200' key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Link */}
      <div className='flex gap-4'>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            View Live Project
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            View Code
          </a>
        )}
        {!link && !githubLink && (
          <p className="text-gray-500 m-0">Coming soon...</p>
        )}
      </div>

    </div>
  );
};

export default Project;
