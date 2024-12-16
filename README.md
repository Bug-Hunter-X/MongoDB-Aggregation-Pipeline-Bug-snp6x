# MongoDB Aggregation Pipeline Bug

This repository demonstrates a common bug encountered when using MongoDB's aggregation framework. The bug results in an inaccurate aggregation due to an incorrectly configured pipeline stage.  The issue lies within the `$group`, `$sort`, and `$limit` stages.  The solution demonstrates the correct pipeline configuration to achieve the intended results.