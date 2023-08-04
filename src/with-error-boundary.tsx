import Roact from "@rbxts/roact";
import ErrorBoundary from "./error-boundary";
import type { ErrorBoundaryProperties } from "./types";

/**
 *  This is a higher-order component that makes it easy to add an error boundary to an existing component. See
 *  [ErrorIn1SecondHOC](https://github.com/chriscerie/react-error-boundary/blob/main/stories/ErrorIn1SecondHOC.story.lua) for a full example.
 *
 * @param Component
 * @param errorBoundaryProps
 */
export function withErrorBoundary<Props extends object>(
	Component: Roact.ComponentType<Props>,
	errorBoundaryProps: ErrorBoundaryProperties,
) {
	const Wrapped = Roact.forwardRef((props: Props, ref) => {
		const componentProps = { ...props, ref };

		return (
			<ErrorBoundary {...(errorBoundaryProps as any)}>
				<Component {...componentProps} key="component" />
			</ErrorBoundary>
		);
	});

	return Wrapped;
}

export default withErrorBoundary;
