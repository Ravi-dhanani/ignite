export default function TeamDetail() {
  return (
    <div>
      <div className="tw-mb-4">
        <label
          htmlFor="event-name"
          className="tw-block tw-text-sm tw-font-medium tw-text-blue-gray-900 tw-mb-2"
        >
          Team Title
        </label>
        <input
          type="text"
          id="event-name"
          placeholder="Security Team"
          className="tw-block tw-outline-none tw-w-full tw-border tw-border-gray-200 tw-rounded-md tw-py-2 tw-px-4 tw-text-gray-700 tw-transition-all"
        />
      </div>
    </div>
  );
}
