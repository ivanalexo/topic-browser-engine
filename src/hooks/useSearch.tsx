import { useState } from 'react';
import { TopicVars } from '../interfaces/ITopic';

const useSearch = () => {
    const [filters, _updateFilter] = useState<TopicVars>({
        name: ''
    });

    const updateFilter = (value: string) => {
        _updateFilter({
            name: value
        });
    };

    return {
        models: { filters },
        operations: { updateFilter }
    }
};

export default useSearch;
