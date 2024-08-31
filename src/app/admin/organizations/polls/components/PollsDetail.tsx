import { useState } from "react";

type PollsItem = {
  id: number;
  question: string;
};

let intitialFaq = [{ id: 1, question: "" }];
export default function PollsDetail() {
  const [Polls, setPolls] = useState<PollsItem[]>(intitialFaq);

  const handleAddPoll = () => {
    const newPoll = { id: Date.now(), question: "" };
    setPolls([...Polls, newPoll]);
  };

  const handleRemovePoll = (id: number) => {
    setPolls(Polls.filter((faq) => faq.id !== id));
  };

  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Question
        </label>
        <input
          type="text"
          id="event-name"
          placeholder="Which quest should we take?"
          className="tw-block tw-outline-none tw-w-full tw-border tw-border-gray-200 tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all"
        />
      </div>
      <div>
        {Polls.map((poll, index) => {
          return (
            <div className="tw-mb-4" key={index}>
              <div>
                <label
                  htmlFor="event-name"
                  className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
                >
                  Question
                </label>
              </div>
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-12 md:tw-items-center tw-mb-4 ">
                <div className="md:tw-col-start-1 md:tw-col-end-12">
                  <input
                    type="text"
                    id="event-name"
                    placeholder="Find Orochimaru secret base."
                    className="tw-block tw-outline-none tw-w-full tw-border tw-border-gray-200 tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all"
                  />
                </div>
                <div className="md:tw-col-start-12 md:tw-flex tw-mt-3 md:tw-mt-0 md:tw-justify-center">
                  <button
                    className="tw-underline tw-font-medium"
                    onClick={() => {
                      handleRemovePoll(poll.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="tw-ml-1">
          <button
            className="tw-underline tw-font-medium"
            onClick={handleAddPoll}
          >
            + Add Another option
          </button>
        </div>
      </div>
    </div>
  );
}
