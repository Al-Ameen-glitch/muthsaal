import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  reset = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
          <div className="p-6 max-w-xl rounded-md shadow bg-neutral-800">
            <h2 className="text-2xl font-semibold mb-2">
              Something went wrong.
            </h2>
            <pre className="text-sm whitespace-pre-wrap wrap-break-word">
              {String(this.state.error)}
            </pre>
            <div className="mt-4">
              <button
                onClick={this.reset}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
