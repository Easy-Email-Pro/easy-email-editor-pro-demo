import { useRef, useState } from "react";
import { Message } from "@arco-design/web-react";

export interface SpamCheckingResult {
  checks: {
    name: string;
    description: string;
    points: number;
  }[];
  isSpam: boolean;
  points: number;
}

export const useSpamScore = ({
  markup,
  plainText,
  initialResult,
}: {
  markup: string;
  plainText: string;
  initialResult?: SpamCheckingResult;
}) => {
  const [result, setResult] = useState<SpamCheckingResult | undefined>(
    initialResult
  );

  const [loading, setLoading] = useState(false);
  const isLoadingRef = useRef(false);

  const load = async () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    setLoading(true);

    try {
      const response = await fetch("https://react.email/api/check-spam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          html: markup,
          plainText: plainText,
        }),
      });

      const responseBody = (await response.json()) as
        | { error: string }
        | SpamCheckingResult;
      if ("error" in responseBody) {
        Message.error(responseBody.error);
      } else {
        setResult(responseBody);
        return responseBody;
      }
    } catch (exception) {
      console.error(exception);
      Message.error(`Failed to check spam score: ${JSON.stringify(exception)}`);
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  };

  return [result, { loading, load }] as const;
};
