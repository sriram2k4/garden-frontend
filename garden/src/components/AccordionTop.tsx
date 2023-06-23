import {
  ControlledAccordion,
  AccordionItem,
  useAccordionProvider,
} from "@szhsin/react-accordion";

const AccordionTop = () => {
  const providerValue = useAccordionProvider({
    allowMultiple: true,
  });
  const { toggleAll } = providerValue;

  const fakePapers = [
    {
      title: "Paper Title 1",
      authors: [
        "First Last",
        "First Last",
        "First Last",
        "First Last",
        "First Last",
        "First Last",
      ],
      doi: "10.3792.1237",
    },
    {
      title: "Paper Title 2",
      authors: [
        "First Last",
        "First Last",
        "First Last",
        "First Last",
        "First Last",
        "First Last",
      ],
      doi: "10.3792.1238",
    },
  ];
  const fakeRepo = {
    title: "Repository Name",
    contributors: [
      "First Last",
      "First Last",
      "First Last",
      "First Last",
      "First Last",
      "First Last",
    ],
    url: "https://github.com/",
  };
  const fakeContainer = {
    id: "sidngrj329fm32",
    fileSize: "3.12 GB",
    status: "Running",
    created: "3 Days ago"
  };

  return (
    <div>
      <div className="flex justify-end pb-2 gap-4">
        <button
          className="px-3 flex items-center border border-gray-300 rounded py-2 gap-2 hover:shadow-md"
          onClick={() => toggleAll(true)}
        >
          <div className="flex flex-col gap-0 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>

          <p>Expand All</p>
        </button>
        <button
          className="px-3 flex items-center border border-gray-300 rounded py-2 gap-2 hover:shadow-md"
          onClick={() => toggleAll(false)}
        >
          <div className="flex flex-col gap-0 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <p>Collapse All</p>
        </button>
      </div>
      <ControlledAccordion
        providerValue={providerValue}
        className=" font-display flex flex-col w-full mr-32"
      >
        {/* <AccordionItem
          className="border-y border-gray-300"
          header={({ state: { isEnter } }) => (
            <div className="inline-flex w-full justify-between p-4">
              <span className="">&#128064; At a glance</span>
              {isEnter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          )}
          buttonProps={{
            className: ({ isEnter }) =>
              `w-full hover:bg-gray-100 ${isEnter && "bg-gray-100"}`,
          }}
          initialEntered
        >
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum{" "}
          </p>
        </AccordionItem> */}

        <AccordionItem
          className="border-y border-gray-300"
          header={({ state: { isEnter } }) => (
            <div className="inline-flex w-full justify-between p-4">
              <span className="">&#128187; Machine Requirements</span>
              {isEnter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          )}
          buttonProps={{
            className: ({ isEnter }) =>
              `w-full hover:bg-gray-100 ${isEnter && "bg-gray-100"}`,
          }}
        >
          <p className="p-4">Machine</p>
        </AccordionItem>

        <AccordionItem
          className="border-y border-gray-300"
          header={({ state: { isEnter } }) => (
            <div className="inline-flex w-full justify-between p-4">
              <span className="">&#128206; Associated Materials</span>
              {isEnter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          )}
          buttonProps={{
            className: ({ isEnter }) =>
              `w-full hover:bg-gray-100 ${isEnter && "bg-gray-100"}`,
          }}
        >
          {/* <p className="p-4">Materials</p> */}
          <div className="grid grid-cols-2 py-4 gap-x-32 gap-y-12 px-16">
            {fakePapers.map((paper) => {
              return (
                <div className="flex flex-col justify-between border border-gray-300 border-1 rounded-xl">
                  <div className="flex items-center px-2 pt-2 pb-6 gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>

                    <h1 className="text-2xl">{paper.title}</h1>
                  </div>
                  <div className="px-2 py-2">
                    <p>
                      Authors:
                      {paper.authors
                        .map<React.ReactNode>((author) => (
                          <span> {author}</span>
                        ))
                        .reduce((prev, curr) => [prev, ", ", curr])}
                    </p>
                    <p className="py-2 flex gap-2">
                      DOI: {paper.doi}{" "}
                      <button title="Copy DOI">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="gray"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                          />
                        </svg>
                      </button>
                    </p>
                    <button className="flex gap-2" title="Copy Citation">
                      Copy Citation
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            {/* repo box */}
            <div className="flex flex-col justify-between border border-gray-300 border-1 rounded-xl">
              <div className="flex items-center px-2 pt-2 pb-6 gap-4">
                <img src="../img/github-logo.png" className="max-w-[5vw]" alt="Github logo"/>

                <h1 className="text-2xl">{fakeRepo.title}</h1>
              </div>
              <div className="px-2 py-2">
                <p className="pb-2">
                  Contributors:
                  {fakeRepo.contributors
                    .map<React.ReactNode>((author) => <span> {author}</span>)
                    .reduce((prev, curr) => [prev, ", ", curr])}
                </p>
                <div className="flex justify-between items-center">
                  <button className="flex gap-2" title="Copy Link">
                    Copy Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                      />
                    </svg>
                  </button>

                  <a
                    href={fakeRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black border px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-300"
                  >
                    Visit Repo
                  </a>
                </div>
              </div>
            </div>

            {/* Container Image */}
            <div className="flex flex-col justify-between border border-gray-300 border-1 rounded-xl">
              <div className="flex items-center px-2 pt-2 pb-4 gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>

                <h1 className="text-2xl">{fakeRepo.title}</h1>
              </div>
              <div className="px-2 py-2">
                <div className="grid grid-cols-2">
                <p className="pb-4">
                  ID: {fakeContainer.id}
                </p>
                <p>Filesize: {fakeContainer.fileSize}</p>
                <p className="pb-4">Status: {fakeContainer.status}</p>
                <p>Created: {fakeContainer.created}</p>
                </div>
                <div className="flex justify-between items-center">
                  <button className="flex gap-2" title="Copy Link">
                    Copy Link
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="gray"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
                      />
                    </svg>
                  </button>

                  <a
                    href={fakeRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black border px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-300"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          className="border-y border-gray-300"
          header={({ state: { isEnter } }) => (
            <div className="inline-flex w-full justify-between p-4">
              <span className="">&#128167; Pipeline FAIR-ness</span>
              {isEnter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          )}
          buttonProps={{
            className: ({ isEnter }) =>
              `w-full hover:bg-gray-100 ${isEnter && "bg-gray-100"}`,
          }}
        >
          <p className="p-4">FAIR</p>
        </AccordionItem>

        <AccordionItem
          className="border-y border-gray-300"
          header={({ state: { isEnter } }) => (
            <div className="inline-flex w-full justify-between p-4">
              <span className="">&#128678; Testing</span>
              {isEnter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
          )}
          buttonProps={{
            className: ({ isEnter }) =>
              `w-full hover:bg-gray-100 ${isEnter && "bg-gray-100"}`,
          }}
        >
          <p className="p-4">Testing</p>
        </AccordionItem>
      </ControlledAccordion>
    </div>
  );
};

export default AccordionTop;
