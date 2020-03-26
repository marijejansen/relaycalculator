export enum Relay {
    Free200,
    Free400,
    Free800,
    Medley200,
    Medley400
}

export const RelayStrings = new Map<Relay, string>([
    [Relay.Free200, '4 x 50 Freestyle'],
    [Relay.Free400, '4 x 100 Freestyle'],
    [Relay.Free800, '4 x 200 Freestyle'],
    [Relay.Medley200, '4 x 50 Medley'],
    [Relay.Medley400, '4 x 100 Medley'],
]);