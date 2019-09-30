# Temporal - Update 2019-10-01 - Notes

## ZonedAbsolute vs. ZonedDateTime

If we were to go with a ZonedAbsolute where we combine an `Absolute` with a `TimeZone` this would become an issue:

(@apaprocki)

> The 2019 Brazil transition looks like this now post-tzdata2019c:
>
>> new Temporal.Absolute(1572577199000000000n).withZone('America/Sao_Paulo').toString()
>
> '2019-10-31T23:59:59-03:00[America/Sao_Paulo]'
>
>> new Temporal.Absolute(1572577200000000000n).withZone('America/Sao_Paulo').toString()
>
>'2019-11-01T00:00:00-03:00[America/Sao_Paulo]'
>
> *Prior* to tzdata2019c being applied, it would have looked like this:
>
>> new Temporal.Absolute(1572577199000000000n).withZone('America/Sao_Paulo').toString()
>
> '2019-10-31T23:59:59-03:00[America/Sao_Paulo]'
>
>> new Temporal.Absolute(1572577200000000000n).withZone('America/Sao_Paulo').toString()
>
> '2019-11-01T01:00:00-02:00[America/Sao_Paulo]'
>
> I have a critical job that needs to run at 1am *local time* in Sao Paulo on November 1st no matter what.
> The future job was created using a local datetime of "2019-11-01T01:00:00" because that was the user intention.
> The future job was entered on 2019-01-01, however, prior to the release/adoption of tzdata 2019c, where the future definition of America/Sao_Paulo changed.
>
> If any system (e.g. Temporal) resolves my intention (1am in local time) to an absolute instant at the time of entry, it would have computed an epoch of 1572577200000000000n + America/Sao_Paulo and that is how the job would be recorded.
>
> Later in 2019, the system gets patched with tzdata 2019c and the system restarts, and queued jobs are read.
>
> The epoch 1572577200000000000n is read and used to create a time in America/Sao_Paulo.
>
> Now, because the definition of local time has changed, the system will run the job at midnight on November 1st instead of the intended time of 1am.
>
> Future datetimes must be kept in local civil datetime + timezone and continuously rendered to UTC / absolute instant to ensure that if the definition of timezones change, the intention of the user (the local civil datetime) is not lost.

So based on that we'd want to have a `ZonedDateTime` combination rather than a `ZonedAbsolute`. However this goes directly against what we've been doing so far.

We've rather cavalierly combined these concepts and just met with absolute chaos, because the object takse on a duality that makes things unexpected.

The alternative then becomes to do both a `ZonedAbsolute` and a `ZonedDateTime`, but I think this doesn't help the cause, since picking the right thing for the job requires a thoughtful decision. This is easier to do if there is no provided `class` to do this, but rather an explicit programming choice in which primitives to use.
