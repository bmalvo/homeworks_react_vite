import { createFileRoute} from '@tanstack/react-router'
import { ipQueryOptions } from '../queries/ipQuery';

export const Route = createFileRoute('/ip')({

    loader: ({ context }) => {

        const { queryClient } = context;

        return queryClient.ensureQueryData(ipQueryOptions)
    }
})
